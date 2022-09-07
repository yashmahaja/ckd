from flask import Flask, render_template, request
import pickle
import numpy as np

model = pickle.load(open('model(1).pkl', 'rb'))
value = ""
# pred=0
app = Flask(__name__)

@app.route('/',methods=['GET', 'POST'])
def main():
   if request.method == 'POST':

      sg = float(request.form.get("sg"))
      al = float(request.form.get("albumin"))
      bg = float(request.form.get("bg"))
      sc = float(request.form.get("sc"))
      haem = float(request.form.get("haemo"))
      pcv = float(request.form.get("pcv"))
      rbcc = float(request.form.get("rbcc"))
      htn = int(request.form.get("hypertension"))
      dia = int(request.form.get("diabetes"))
      
      arr = np.array([[sg,al,bg,sc,haem,pcv,rbcc,htn,dia]])
      pred = model.predict(arr)
      if pred == 0:
         value = "You have CKD"
      else:
         value = "You don't have CKD"

      return render_template('index.html' ,data=value)
   else:
      return render_template('index.html')


# @app.route('/predict',methods=['GET', 'POST'])
# def predict():
  
   

if __name__ == '__main__':
   app.run(debug=True)