<script>
  export let title;
</script>

<details
  id={title.toLowerCase()}
  open
>
  <summary>
    <h2>{title}</h2>
  </summary>
  <div class="contents"><slot /></div>
</details>

<style lang="scss">
  summary {
    &:hover {
      cursor: pointer;
    }
    h2 {
      display: inline;

      margin-left: 10px;
    }
  }
  details summary ~ * {
    animation: sweep 0.5s ease-in-out;
  }

  @keyframes sweep {
    0% {
      opacity: 0;
      margin-top: -10px;
    }
    100% {
      opacity: 1;
      margin-top: 0px;
    }
  }
  div.contents {
    border-left: 1px solid var(--accent-dark);
    margin-left: 10px;
    padding-left: 20px;
  }
  #skills summary::marker {
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdyZW5jaCI+PHBhdGggZD0iTTE0LjcgNi4zYTEgMSAwIDAgMCAwIDEuNGwxLjYgMS42YTEgMSAwIDAgMCAxLjQgMGwzLjc3LTMuNzdhNiA2IDAgMCAxLTcuOTQgNy45NGwtNi45MSA2LjkxYTIuMTIgMi4xMiAwIDAgMS0zLTNsNi45MS02LjkxYTYgNiAwIDAgMSA3Ljk0LTcuOTRsLTMuNzYgMy43NnoiLz48L3N2Zz4=");
  }
  #volunteering summary::marker {
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhlYXJ0LWhhbmRzaGFrZSI+PHBhdGggZD0iTTE5IDE0YzEuNDktMS40NiAzLTMuMjEgMy01LjVBNS41IDUuNSAwIDAgMCAxNi41IDNjLTEuNzYgMC0zIC41LTQuNSAyLTEuNS0xLjUtMi43NC0yLTQuNS0yQTUuNSA1LjUgMCAwIDAgMiA4LjVjMCAyLjMgMS41IDQuMDUgMyA1LjVsNyA3WiIvPjxwYXRoIGQ9Ik0xMiA1IDkuMDQgNy45NmEyLjE3IDIuMTcgMCAwIDAgMCAzLjA4djBjLjgyLjgyIDIuMTMuODUgMyAuMDdsMi4wNy0xLjlhMi44MiAyLjgyIDAgMCAxIDMuNzkgMGwyLjk2IDIuNjYiLz48cGF0aCBkPSJtMTggMTUtMi0yIi8+PHBhdGggZD0ibTE1IDE4LTItMiIvPjwvc3ZnPg==");
  }
  #education summary::marker {
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdyYWR1YXRpb24tY2FwIj48cGF0aCBkPSJNMjIgMTB2Nk0yIDEwbDEwLTUgMTAgNS0xMCA1eiIvPjxwYXRoIGQ9Ik02IDEydjVjMyAzIDkgMyAxMiAwdi01Ii8+PC9zdmc+");
  }
  #experience summary::marker {
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJyaWVmY2FzZSI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiB4PSIyIiB5PSI3IiByeD0iMiIgcnk9IjIiLz48cGF0aCBkPSJNMTYgMjFWNWEyIDIgMCAwIDAtMi0yaC00YTIgMiAwIDAgMC0yIDJ2MTYiLz48L3N2Zz4=");
  }
  #publications summary::marker {
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2stb3Blbi10ZXh0Ij48cGF0aCBkPSJNMiAzaDZhNCA0IDAgMCAxIDQgNHYxNGEzIDMgMCAwIDAtMy0zSDJ6Ii8+PHBhdGggZD0iTTIyIDNoLTZhNCA0IDAgMCAwLTQgNHYxNGEzIDMgMCAwIDEgMy0zaDd6Ii8+PHBhdGggZD0iTTYgOGgyIi8+PHBhdGggZD0iTTYgMTJoMiIvPjxwYXRoIGQ9Ik0xNiA4aDIiLz48cGF0aCBkPSJNMTYgMTJoMiIvPjwvc3ZnPg==");
  }
  #awards summary::marker {
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyb3BoeSI+PHBhdGggZD0iTTYgOUg0LjVhMi41IDIuNSAwIDAgMSAwLTVINiIvPjxwYXRoIGQ9Ik0xOCA5aDEuNWEyLjUgMi41IDAgMCAwIDAtNUgxOCIvPjxwYXRoIGQ9Ik00IDIyaDE2Ii8+PHBhdGggZD0iTTEwIDE0LjY2VjE3YzAgLjU1LS40Ny45OC0uOTcgMS4yMUM3Ljg1IDE4Ljc1IDcgMjAuMjQgNyAyMiIvPjxwYXRoIGQ9Ik0xNCAxNC42NlYxN2MwIC41NS40Ny45OC45NyAxLjIxQzE2LjE1IDE4Ljc1IDE3IDIwLjI0IDE3IDIyIi8+PHBhdGggZD0iTTE4IDJINnY3YTYgNiAwIDAgMCAxMiAwVjJaIi8+PC9zdmc+");
  }
  #languages summary::marker {
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdsb2JlLTIiPjxwYXRoIGQ9Ik0yMS41NCAxNUgxN2EyIDIgMCAwIDAtMiAydjQuNTQiLz48cGF0aCBkPSJNNyAzLjM0VjVhMyAzIDAgMCAwIDMgM3YwYTIgMiAwIDAgMSAyIDJ2MGMwIDEuMS45IDIgMiAydjBhMiAyIDAgMCAwIDItMnYwYzAtMS4xLjktMiAyLTJoMy4xNyIvPjxwYXRoIGQ9Ik0xMSAyMS45NVYxOGEyIDIgMCAwIDAtMi0ydjBhMiAyIDAgMCAxLTItMnYtMWEyIDIgMCAwIDAtMi0ySDIuMDUiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjwvc3ZnPg==");
  }
  #projects summary::marker {
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpZ2h0YnVsYiI+PHBhdGggZD0iTTE1IDE0Yy4yLTEgLjctMS43IDEuNS0yLjUgMS0uOSAxLjUtMi4yIDEuNS0zLjVBNiA2IDAgMCAwIDYgOGMwIDEgLjIgMi4yIDEuNSAzLjUuNy43IDEuMyAxLjUgMS41IDIuNSIvPjxwYXRoIGQ9Ik05IDE4aDYiLz48cGF0aCBkPSJNMTAgMjJoNCIvPjwvc3ZnPg==");
  }
</style>
