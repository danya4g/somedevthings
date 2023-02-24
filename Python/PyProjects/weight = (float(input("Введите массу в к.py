weight = (float(input("Введите массу в кг: ")))
height = (float(input("Введите рост в см: ")))
index = weight / (height / 100) ** 2
print("Ваш индекс массы тела равен", index)
if index <= 18.5:
    print("Упс! У Вас недобор веса.")
elif index <= 24.9:
    print("Супер, Ваш вес в норме.")
elif index <= 29.9:
    print("Не забывайте делать зарядку и качаться каждый день!")
else:
    print("Необходимо похудеть.")

