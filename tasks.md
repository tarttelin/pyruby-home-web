# Tech plan

* Host on firebase
* Deploy from cloudbuild
* Integrate firebase auth
* Define as progressive webapp
* Prompt mobile users to install as app
* Get content from CMS
* Store feedback in Firestore
* Integrate with cloud function
* Integrate with cloud run
* Upload image files to cloud storage
* Monitoring / alerting
* Analytics
* Multi-language


----
Enable cloud build
Enable GCR
Push firebase builder `https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/firebase` image
create firebase / gcp project
add cloudbuild IAM "API Keys Admin" and "Firebase Admin"