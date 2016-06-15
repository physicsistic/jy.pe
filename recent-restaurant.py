import json
import sys
import re

all_jype = json.load(sys.stdin)

places = sorted(all_jype.values(), key=lambda x:x.get('first_recorded_inspection', '0'), reverse=True)

for place in places:
    if place['BORO'] != 'MANHATTAN':
        continue
    if place.get('bad_violations', []):
        continue
    print '<li><a href="/{name}">{DBA}</a>, {BUILDING} {firstStreetNameNormalized}</li>'.format(**place)