---
path: '/post-five'
cover: './the_horse.jpg'
date: '2020-04-15'
title: 'Using ipdb with breakpoint in python'
subtitle: 'National Aquatic Resource Survey method of snapping pour points'
tags: ['tutorial', 'javascript', 'frontend']
published: true
---

In your home folder you should have the following directory:
```shell
~$ .ipython/profile_default/startup/
```

If you make a `.py` file there it will be run every time that `ipython` is started. 
```python
import os
import ipdb
os.environ['PYTHONBREAKPOINT'] = 'ipdb.set_trace'
```
This will allow you to use `breakpoint()` in your scripts and it will trigger the `ipdb` debugger.
```python
> /home/rick/dev/chemcurator_django/chemreg/compound/validators.py(110)validate_smiles()
    109         breakpoint()
--> 110         ps.ParseSmiles(smiles, partial=False)
    111     except ps.ValenceError:

ipdb> type your commands here!
```

The details can be found in the [docs](https://www.python.org/dev/peps/pep-0553/)
