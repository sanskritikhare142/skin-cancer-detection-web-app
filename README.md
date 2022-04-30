# Skin Cancer Detection Web Application

An application that can help a user detect skin cancer in its early stages. Just click a picture of the infected area, upload it and get the results.

## Starting the backend server for the first time

To create a virtual environment for the backend, in the `api` directory, you can run:

### `python -m venv venv`

**Note: If you are using an older mac, make sure you are using python 3. To create an alias for python 3, you can use the following command on your terminal:**

### `alias python=python3`

To activate your virtual environment, in the `api` directory, you can run:

(For macOS/Linux)
### `source venv/bin/activate`

(For Windows)
### `venv\Scripts\activate`

To download all the project dependencies required for backend, use `pip` to install the dependencies. In the `api` directory, you can run:

### `pip install requirements.txt`

To start the backend server, in the project directory, you can run:

### `yarn start-api`

**Note: If you are using windows, before running the above command, go to `package.json` in the project directory and in the scripts section, change the `start-api` and `test-api` fields to the following:**
**`"start-api": "cd api && venv/Scripts/flask run --no-debugger"`**
**`"test-api": "cd api && venv/Scripts/flask test"`**

## Starting the frontend server for the first time

To download all the dependencies required for frontend, in the project directory, you can run:

### `yarn`

To start the frontend server, in the project directory, you can run:

### `yarn start`

## How to run the application usually (after first time)

To start the frontend server, run the following command in the project directory:

### `yarn start`

To start the backend server, run the following command in the project directory:

### `yarn start-api`
