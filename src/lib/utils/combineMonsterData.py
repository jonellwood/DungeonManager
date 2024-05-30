import json
import os

def combine_json_files(input_directory, output_file):
    combined_data = {"monster": []}

    # Loop through all the files in the directory
    for filename in os.listdir(input_directory):
        if filename.endswith('.json'):
            file_path = os.path.join(input_directory, filename)
            with open(file_path, 'r') as file:
                data = json.load(file)
                # Check if the JSON contains a "monster" key and it's a list
                if "monster" in data and isinstance(data["monster"], list):
                    combined_data["monster"].extend(data["monster"])
    
    # Write the combined data into the output file
    with open(output_file, 'w') as output:
        json.dump(combined_data, output, indent=4)

# Specify the input directory containing JSON files and the output file name
input_directory = '../data'
output_file = 'combined_data.json'

combine_json_files(input_directory, output_file)

