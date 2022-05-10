# cook your dish here
t=int(input())
for i in range(t):
    n,d=list(map(int,input().split()))
    for i in range(n):
        list1=int(input())
    count=0    
    for j in range(len(list1)):
        if list1[j]>=80 and list1[j]<=9:
            count=count+1
