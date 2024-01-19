from linkedin_api import Linkedin
import json

api = Linkedin(
    "ehudson@wellesley.edu", "s4XsT*N/d:B8uKq", proxies={"HTTPS": "localhost:3128"}
)

profile = api.get_profile("elthudson")

with open("../public/resume.json", "w+") as file:
    json.dump(profile, file)
