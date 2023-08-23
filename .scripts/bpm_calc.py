import argparse

parser = argparse.ArgumentParser(
        prog="bpmcalc",
        description="calculates bpm")

parser.add_argument("current_bpm")
parser.add_argument("semitone_change")

args = parser.parse_args()

bpm = int(args.current_bpm)
sm = int(args.semitone_change)

print(bpm * (2**(sm / 12)))
