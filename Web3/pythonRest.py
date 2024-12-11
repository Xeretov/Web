from flask import Flask, jsonify, render_template, request
import psycopg2
from psycopg2 import sql

#Flask api
app = Flask(__name__, template_folder='./templates')

#Flask index
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/query', methods=['POST'])
def query():
    results = []
    query = request.json.get('query')
    conn = get_db_connection()
    try:
        with conn.cursor() as cursor:
            cursor.execute(sql.SQL(query))
            results = cursor.fetchall()
            columns = [desc[0] for desc in cursor.description]
            results = [dict(zip(columns, row)) for row in results]
    except Exception as e:
        results = [{'error':str(e)}]
    finally:
        conn.close()
    return jsonify(results)

#DB connection
def get_db_connection():
    conn = psycopg2.connect(
        host="localhost",
        database="accademia",
        user="postgres",
        password="postgres"
    )
    return conn


    
if __name__ == '__main__':
    app.run(debug=True, port=8085)