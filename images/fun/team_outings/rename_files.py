import os, pdb, pandas as pd
import pathlib


dir = '' # blank so you don't overwrite other images by accident
files = os.listdir(dir)
os.chdir(dir)
files_time_stamped = []
for f in files:
    files_time_stamped.append((f,pathlib.Path(f).stat().st_mtime))

frame = pd.DataFrame(files_time_stamped, columns = ["file","time"])


files_sorted = frame.sort_values('time')['file']
files_sorted[0:10]

for index, file in enumerate(files_sorted):
   os.rename(file,"outing_name{}.jpg".format(index+1))

