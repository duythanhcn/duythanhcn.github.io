i = 0
j = 0
newArr = []
num1 = [1, 4, 9] # i
num2 = [2, 3, 6] # j
small = 0
while j < len(num1):
  if num1[i] < num2[j]:
    newArr.append(num1[i])
    # small = num1[i]
    # j += 1
  elif num1[i] > num2[j]:
    newArr.append(num1[i])
    newArr.append(num1[j])
  else:
    newArr.append(num1[j])