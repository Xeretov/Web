from flask import Flask, jsonify, render_template
import psycopg2
from psycopg2 import sql

#Flask api
app = Flask(__name__, template_folder='./')

#Flask index
@app.route('/', methods=['GET', 'POST'])
def index():
    results = []
    if request.method == 'POST':
        query = request.form['query']
        conn = get_db_connection()
        try:
            results = conn.execute(sql.SQL(query)).fetchall()
        except Exception as e:
            results = [{'error':str(e)}]
        finally:
            conn.close()
    return render_template('index.html', results=results)

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