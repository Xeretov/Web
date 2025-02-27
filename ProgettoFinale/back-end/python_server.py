from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route('/employees', methods=['GET'])
def get_employees():
    results = []
    query = 'SELECT * FROM employee'
    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        cursor.execute(query)
        results = cursor.fetchall()
        columns = [description[0] for description in cursor.description]
        results = [dict(zip(columns, row)) for row in results]
    except Exception as e:
        results = [{'error': str(e)}]
    finally:
        conn.close()
    return jsonify(results)

@app.route('/news', methods=['GET'])
def get_news():
    results = []
    query = 'SELECT * FROM news'
    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        cursor.execute(query)
        results = cursor.fetchall()
        columns = [description[0] for description in cursor.description]
        results = [dict(zip(columns, row)) for row in results]
    except Exception as e:
        results = [{'error': str(e)}]
    finally:
        conn.close()
    return jsonify(results)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

if __name__ == "__main__":
    app.run(debug=True, port=8085)
