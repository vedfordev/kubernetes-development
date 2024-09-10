### Steps for Deployment

## Create IAM user for eks permission (if possible give administrator access)

## EKS Controller Setup:

1. Provision t2.micro machine with key-pair access
2. ssh into ec2 and follow below steps

```shell
mkdir aws-cli
cd aws-cli
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
sudo apt install unzip
unzip awscliv2.zip
sudo ./aws/install -i /usr/local/aws-cli -b /usr/local/bin --update
```

3. setup aws config via providing access and secret key
```shell
aws configure
```

4. Install docker
```shell
sudo apt-get update
sudo apt install docker.io
docker ps
sudo chown $USER /var/run/docker.sock
```

5. Install kubectl
```shell
curl -o kubectl https://amazon-eks.s3.us-west-2.amazonaws.com/1.19.6/2021-01-05/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin
kubectl version --short --client
```

6. Install eksctl
```shell
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin
eksctl version
```

7. clone the repo
```shell
cd
mkdir mykubework
cd mykubework
git clone git@github.com:vedfordev/kubernetes-development.git
```

8. initialise cluster it will take time
```shell
cd ingress-tutorial
eksctl create cluster -f cluster.yaml 
```

9. install ingress
```shell
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

10. setup config
```shell
kubectl apply -f myconfig.yml
```

