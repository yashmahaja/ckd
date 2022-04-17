from flask import Flask, render_template, request
import pickle
import numpy as np

model = pickle.load(open('model(1).pkl', 'rb'))

app = Flask(__name__)



@app.route('/')
def man():
    return render_template('index.html')


@app.route('/predict',methods=['POST'])
def home():
   if request.method == 'POST':
                sg = request.form["sg"]
                al = request.form["albumin"]
                bg = request.form["bg"]
                sc = request.form["sc"]
                haem = request.form["haemo"]
                pcv = request.form["pcv"]
                rbcc = request.form["rbcc"]
                htn = request.form["hypertension"]
                dia = request.form["diabetes"]
                arr = np.array([[sg,al,bg,sc,haem,pcv,rbcc,htn,dia]])
                pred = model.predict(arr)
                return render_template('after.html', data=pred)

if __name__ == '__main__':
   app.run(debug=True)