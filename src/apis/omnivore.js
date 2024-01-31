import { omnivore } from "../../env.json";
const searchOmnivore = async (search) =>
  fetch("https://api-prod.omnivore.app/api/graphql", {
    method: "post",
    headers: {
      Authorization: omnivore,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      variables: {
        query: search
      },
      query: `
      query Search(
      $after: String
      $first: Int
      $query: String
      $includeContent: Boolean
      $format: String
    ) {
      search(
        first: $first,
        after: $after,
        query: $query,
        includeContent: $includeContent,
        format: $format
      ) {
        ... on SearchSuccess {
          edges {
            node {
                title
                siteName
                url
                image
                author
                description
                publishedAt
            }
          }
        }
        ... on SearchError {
          errorCodes
        }
      }
    }`
    })
  }).then((r) => r.json());

export const getArticles = async () => {
  return await searchOmnivore("type:ARTICLE sort:saved").then((j) =>
    j.data.search.edges.map((e) => ({
      ...e.node,
      title: e.node.title.split(/\s[\||-]\s/g)[0],
      source: e.node.siteName,
      creator: e.node.author
    }))
  );
};

export const getBooks = async () => {
  return await searchOmnivore("type:BOOK").then((j) =>
    j.data.search.edges.map((e) => ({
        ...e.node,
        creator: e.node.author
    }))
  );
};
