import pandas as pd
import os
from dotenv import load_dotenv
from email_util import send_mail

load_dotenv()

SMTP_USERNAME = os.getenv('SMTP_USERNAME')
SMTP_PASSWORD = os.getenv('SMTP_PASSWORD')
MSG_BODY = """Dear Student, 

CS384 2021 Quiz 2 marks are attached for reference.
+5 Correct, -1 for wrong.
--
Dr. Mayank"""
SUBJECT = "CS384 2021 - Quiz 2 Regex - with Negative"
SENDER = "code.testing.bot@gmail.com"

BASE_PATH = os.path.dirname(
    os.path.realpath(__file__))
OUTPUT_DIR = BASE_PATH + "/output/rollNumberWise/"
RESPONSE_FILE = BASE_PATH + "/uploads/csv/responses.csv"


def email_marksheets():
    print(OUTPUT_DIR)
    responses_df = pd.read_csv(RESPONSE_FILE)
    responses_df.set_index(['Roll Number'], inplace=True)
    print("df loaded.")

    print(os.listdir(OUTPUT_DIR))
    for filename in os.listdir(OUTPUT_DIR):
        if not filename.endswith(".xlsx"):
            continue
        FILEPATH = OUTPUT_DIR + filename
        RECEIVER = responses_df.loc[filename.split('.')[0]]['Email address']

        print(RECEIVER, SUBJECT)

        send_mail(MSG_BODY, SUBJECT, SENDER, RECEIVER, FILEPATH,
                  filename, SMTP_USERNAME, SMTP_PASSWORD)


email_marksheets()
