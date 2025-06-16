provider "aws" {
    region = "ap-south-1"
}

resource "aws_instance" "EasyBuy" {
  ami           = "ami-0b09627181c8d5778"
  instance_type = "t2.micro"
  key_name      = "EasyBuy-key"

  tags = {
    Name = "EasyBuy"
  }

  associate_public_ip_address = true
}