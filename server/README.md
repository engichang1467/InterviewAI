# Hack the North 2021 - IntAI Backend

Backend server of IntAI written in Flask

## To run the Server

- Install the required package from requirements.txt

```bash
pip install -r requirements.txt
```

- Download the service.json to get access to the Google Cloud API credentials, and set up the path for service.json. 

```bash
# For Windows
set GOOGLE_APPLICATION_CREDENTIALS=<path-to-file>/services.json

# For MacOS
export GOOGLE_APPLICATION_CREDENTIALS="<path-to-file>/services.json"
```

- Run the script

```bash
python3 app.py

 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

Once the server is running, [Check out the test here](http://localhost:5000)