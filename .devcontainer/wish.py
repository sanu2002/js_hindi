import pyautogui
import time

def my_wish():
    try:
        for i in range(1000):
            pyautogui.write('i love my wife, you are my best wife ever')
            time.sleep(1)
            pyautogui.press('enter')
    except KeyboardInterrupt:
        print("Script interrupted.")

if __name__ == "__main__":
    my_wish()
