# diff2HtmlCompare

A python script that takes two urls and respective environments e.g. prod and qa to compare the differences between html source (side-by-side) in an HTML format. Supports both python2 and python3.

### Installation
```
pip install -r requirements.txt
```

### Usage
```
diff2HtmlCompare.py [-h] [-s] [-v] url1 url2 env1 env2

positional arguments:
  url1       url to compare ("before" url).
  url2       url to compare ("after" url).
  env1       environment to compare ("before" environment e.g. prod).
  env2       environment to compare ("after" environment e.g. qa).

optional arguments:
  -h, --help  show this help message and exit
  -s, --show  show html in a browser.
  -v          show verbose output.
```
### Example Output

![ScreenShot](/screenshots/latest.png)
