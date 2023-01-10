
source .env
gcloud config set project $GCP_PROJECT 
gcloud builds submit --region=us-central1
