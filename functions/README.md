# Backend

Platform to run the API requests from.
Will be responsible for fetching data from the db based on requests from the front end, and potentially communicating with 3rd party APIs.

Expected to be hosted in AWS using the Lambda free 1,000,000 requests per month offering.

## API Integrations

### IDGB

1. create developer application in twitch.tv
2. Save client_id
3. Generate and save client_secret
4. refer to the api