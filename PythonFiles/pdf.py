import pandas as pd
import numpy as np
import json
from collections import defaultdict
data=pd.read_csv("exercise.csv")

activityDict130=defaultdict(list)
activityDict155=defaultdict(list)
activityDict180=defaultdict(list)
activityDict205=defaultdict(list)


for i in range(len(data)):
  activity=data['Activity, Exercise or Sport (1 hour)'][i].split(',')[0]
  activityDict130[activity].append(data['130 lb'][i])
  activityDict155[activity].append(data['155 lb'][i])
  activityDict180[activity].append(data['180 lb'][i])
  activityDict205[activity].append(data['205 lb'][i])


for i ,j in activityDict130.items():
  activityDict130[i]=np.mean(j)

for i ,j in activityDict155.items():
  activityDict155[i]=np.mean(j)

for i ,j in activityDict180.items():
  activityDict180[i]=np.mean(j)

for i ,j in activityDict205.items():
  activityDict205[i]=np.mean(j)

file_name = 'activityDict130.json'

with open(file_name, 'w') as json_file:
    json.dump(activityDict130, json_file, indent=4)

print(f"Data successfully saved to {file_name}")


file_name = 'activityDict155.json'

with open(file_name, 'w') as json_file:
    json.dump(activityDict155, json_file, indent=4)

print(f"Data successfully saved to {file_name}")

file_name = 'activityDict180.json'

with open(file_name, 'w') as json_file:
    json.dump(activityDict180, json_file, indent=4)

print(f"Data successfully saved to {file_name}")

file_name = 'activityDict205.json'

with open(file_name, 'w') as json_file:
    json.dump(activityDict205, json_file, indent=4)

print(f"Data successfully saved to {file_name}")


