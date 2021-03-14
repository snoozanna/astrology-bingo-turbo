"""First hug API (local and HTTP access)"""
from flatlib.datetime import Datetime
from flatlib.geopos import GeoPos
from flatlib.chart import Chart
from flatlib import const

import hug
# import urllib.parse
import json

class App(dict):
    def __str__(self):
        return json.dumps(self)

from hug.middleware import CORSMiddleware # I can't remember why I needed this but I did, you may or may not need it
api = hug.API(__name__)
api.http.add_middleware(CORSMiddleware(api))
# api.http.set_input_format('text/plain', hug.input_format.json)
api.http.output_format = hug.output_format.json

@hug.get(examples='date=20150313&time=1700&location1=38.3234232&location2=-8.5498327&utc=8')  
@hug.local()
def formatData(date: hug.types.text, time: hug.types.text, location1: hug.types.float_number, location2: hug.types.float_number, utc: hug.types.text, hug_timer=3):
    """Changing the data types"""
    print(date)
    dateString = date[0:4]+"/"+date[4:6]+"/"+date[6:8]
    timeString = time[0:2]+":"+time[2:4]
    birthday = date
    return runAstroScript(dateString, timeString, location1, location2, utc, time, birthday)
    # return ('{0} {1} {2} {3} {4}'.format(dateString, timeString, location1, location2, utc))   




def runAstroScript(dateString, timeString, location1, location2, utc, time, birthday):
# Here you call the functions you need to and parse the data into whatever format you need it in (maybe a dict)
    """Running flatlib script"""
    date = Datetime(dateString, timeString, utc)
    pos = GeoPos(location1, location2)
    chart = Chart(date, pos, IDs=const.LIST_OBJECTS)
    # chart = Chart(date, pos, hsys=const.HOUSES_PLACIDUS)
    asc = chart.get(const.ASC)
    chart_dict = {}
    for obj in chart.objects:
        chart_dict.update({obj.id: obj.sign})
    chart_dict.update({asc.id: asc.sign})
    chart_dict.update({"birthday":dateString, "time":time, "latitude":location1, "longitude":location2})
    print(chart_dict)
    dblQuotes = App(chart_dict) # ensures double quotes
    return json.dumps(dblQuotes)
    # return ('{0}'.format(chart_dict))
    # return ('{0}{1}{2}'.format(date, pos.lat, pos.lon))
