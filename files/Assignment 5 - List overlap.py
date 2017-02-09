a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
new=[]


for x in a:
    for i in b:
        if x == i:
            if i in new:
                pass
            else:
                new.append(i)

print(new)