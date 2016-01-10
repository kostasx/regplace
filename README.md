# regplace
JavaScript RegExp Replace for String Objects (Perl inspired)

`
<STRING>.regplace(PATTERN)(REPLACE)(FLAGS)
`

# Examples
```
"Some Other".regplace("some")("Someone")("i");      // Someone Other
"Some Other".regplace("o")("*")("ig");              // S*me *ther
```
