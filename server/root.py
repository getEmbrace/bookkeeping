
import time
import json
import hashlib
import datetime
import threading

import db1 as DB
import myHttp

useDb = DB.useDb
getDbuser = DB.getDbuser

path = "D:/HTML/vue/vueProject/bookkeeping/server/dist"

def index(params):

    with open(path + '/index.html', 'r') as f:
        data = f.read()
        
    response = myHttp.response({
        'body': data,
        'headers': {
            'Content-Type': 'text/html'
        }
    })
    return response

routers = {
    '/': index,
    '/home': index,
    '/money': index,
    '/tag': index,
    '/statistics': index,
}
