#include <stdio.h>
void print_arr(int *A, int low, int high)
{
    for (int i = low; i < +high; i++)
    {
        printf("%d ", A[i]);
    }
    printf("\n");
}
int main()
{
    int n = 10;
    int A[100];
    A[0] = 0;
    A[1] = 1;
    A[2] = 1;
    for (int i = 3; i < n; i++)
    {
        A[i] = A[i - 1] + A[i - 2];
    }
    print_arr(A, 0, n);
    return 0;
}