from flask import Flask,request
from flask_cors import CORS
import json
from face_rec import FaceRec, personal
from PIL import Image
import base64
import io
import os
import shutil
import time


app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['POST','GET'])
def api():
	data = request.get_json()
	resp = '---'
	directory = './stranger'
	datos = []

	if data: 
		if os.path.exists(directory):
			shutil.rmtree(directory)
		if not os.path.exists(directory):
			try:
				os.mkdir(directory)
				time.sleep(1)
				result = data['data']
				b = bytes(result, 'utf-8')
				image = b[b.find(b'/9'):]
				img = Image.open(io.BytesIO(base64.b64decode(image)))
				img.save(directory+'/stranger.jpg')

			except:
				pass
			
			for persona in personal:
				print(persona.known_name)
				datos = persona.reconize_faces()
				
				if datos[0]:
					resp = datos[1]
					break
					

				else:
					resp = ['NO REGISTRADO :C','-','-',False]

	return resp


if __name__ == '__main__':
    app.run()
