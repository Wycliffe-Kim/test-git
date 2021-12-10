FROM python:latest

WORKDIR /usr/app

RUN pip install poetry

COPY . .
RUN poetry install

CMD ["python", "./python/main.py"]