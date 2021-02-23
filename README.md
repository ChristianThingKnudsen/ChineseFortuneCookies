# To run this app

$ npm install
$ node app.js

And then access the url in the browser

# To run docker and kubernetes
$ minikube start
$ docker build -t cfc .
$ docker tag cfc <dockerID>/cfc
$ docker push <dockerID>/cfc
$ kubectl apply -f ./deployment.yaml
$ kubectl apply -f ./service.yaml
$ minikube service --url cfc-service

# To run again
$ docker build -t <dockerID>/cfc .
$ minikube start
$ minikube service --url cfc-service

# To delete stuff
$ kubectl delete -f ./deployment.yaml
$ kubectl delete -f ./service.yaml
Delete rep in dockerhub
