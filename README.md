# diff2HtmlCompare

A python script that takes a number of urls to compare the differences between html sources (side-by-side) in an HTML format.
First url is the base url. All other url htmls are compared against the base url.
### Installation
```
pip install -r requirements.txt
```

### Usage
```
diff2HtmlCompare.py [-h] [-s] [-v] [-e] [-u]

positional arguments:
  -u, --urls       urls to compare against, must be more than 1

optional arguments:
  -h, --help  show this help message and exit.
  -s, --show  show diff reports in different browser tabs.
  -v          show verbose output.
  -i, --ignorewords  Lines with these words will be excluded from diffs.
  -e, --environments  if provided then must match with the number of urls, otherwise a default env list will be generated.
```
### Example Output

![ScreenShot](/screenshots/latest.png)
