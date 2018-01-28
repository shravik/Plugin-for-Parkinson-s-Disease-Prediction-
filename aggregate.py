import os
import pandas
import numpy as np
import glob

# arr = os.listdir("/Users/nehajinwala/Downloads/Tappy Data/proc/fin/")
# print arr[1]
#x = glob.glob("/Users/nehajinwala/Downloads/Tappy Data/proc/fin/*.txt")
x = glob.glob("/Users/nehajinwala/Downloads/Tappy Data/proc/fin/*.txt")
# df=[]
for file in x:
    try:
        df= pandas.read_table(file, dtype={'userkey':object, 'date':object, 'timestamp': object, 'hand': object,
                                        'holdtime': np.float32, 'direction': object, 'latencytime': np.float32, 'flighttime': np.float32,},
                           usecols=['userkey','date', 'timestamp', 'hand', 'holdtime', 'direction', 'latencytime', 'flighttime'])
    except:
        print "Error :: " + file

#aggregate_list = \
    data = str(df.groupby(['userkey', 'direction', 'hand']).mean())
    df.to_csv("aggregated_data.csv", encoding='utf-8')

#print list(aggregate_list)
