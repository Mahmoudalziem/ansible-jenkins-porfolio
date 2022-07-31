from flask import Flask,render_template
import socket

app = Flask(__name__)

@app.route("/")
def index():
    try:
        name = "Mahmoud Abd Alziem"
        age = 24
        return render_template('index.html', name=name, age=age)
    except:
        return render_template('error.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
