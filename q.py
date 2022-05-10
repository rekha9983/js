# def OperationsBinaryString(str):
#     a=int(str[0])
#     i=1
#     while i<len(str):
#         if str[i]=='A':
#             a&=int(str[i+1])
#         elif str[i]=='B':
#             a|=int(str[i+1])
#         else:
#             a^=int(str[i+1])
#         i+=2
#     return a
# str=input()
# print(OperationsBinaryString(str))


# t=int(input())
# for i in range(t):
#     n,d=map(int,input().split())
#     a=list(map(int,input().split()))
#     b=0
#     for x in a:
#         if((x<=9)or(x>=80)):
#             b+=1 
#     c=n-b
#     r=0
#     y=0
#     if(c%d==0):
#         r=c//d 
#     else:
#         r=(c//d)+1 
#     if(b%d==0):
#         y=b//d 
#     else:
#         y=(b//d)+1 
#     r=r+y  
#     print(r)



# import math 
# for _ in range(int(input())):
#     n,d = map(int,input().split())
#     l = [int(x) for x in input().split()]
#     r,nr = 0,0
#     for i in range(n):
#         if l[i]<=9 or l[i]>=80:
#             r+=1 
#         else:
#             nr+=1
#     print(math.ceil(r/d)+math.ceil(nr/d))
    

# d1,v1,d2,v2,n=map(int,input().split())
# a=v1+v2
# max=d1
# t=a
# if d1>d2:
#     d=d1-d2
#     t=d*v2+a
#     max=d1
# elif d1<d2:
#     d=d2-d1
#     t=d*v1+a
#     max=d2
# total=n-t
# x=0
# count=0
# for i in range(t,total+1):
#     x=x+a
#     if x<n:
#         count+=1
# print(count+d)
    # if total%a==0:
#     y=total//a
# else:
#     y=total//a+1
# print(y+max)


# T=int(input())
# for _ in range(T):
#     N=int(input())
#     A=list(map(int,input().split()))
#     B=sum(A)
#     if B%2==0:
#         print(0)
#     else:
#         C=0
#         for i in range(N):
#             if A[i]==2:
#                 C+=1
#                 break
#         if C!=0:
#             print(1)
#         else:
#             print(-1)



# T = int(input())
# for i in range(T):
#     n, x = map(int, input().split())
#     l1 = []
#     rating = []
#     for j in range(n):
#         s, r = map(int, input().split())
#         l1.append([s, r])
#     for k in l1:
#         if k[0] <= x:
#             rating.append(k[1])
#     print(max(rating))


t = int(input())
for i in range(t):
    n,x = map(int,input().split())
    rating=0
    for j in range(n):
        s,r = map(int,input().split())
        if s<=x:
            if r>rating:
                rating=r
    print(rating)