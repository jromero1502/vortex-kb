---
title: Representación de enteros
tags:
  - binario
  - int
  - cienciascomputacion
---
# Unsigned

El término unsigned se utiliza para definir la interpretación que se le da a un patrón de bits que representa un número entero que **no tiene signo**. Esto significa que siempre se interpreta como un número positivo.

La fórmula de conversión que utilizan los compiladores y programas que interpretan una cadena de bits como *unsigned* es la siguiente:

$$
BTU(\vec{x})=\sum_{i=0}^{w-1} \vec{x}_{i}2^i
$$
Aquí estamos definiendo la función $BTU(\vec{x})$ que significa *Binary To Unsigned* y recibe un parámetro $\vec{x}$ que representa al vector de bits que se interpretará como unsigned.

La función consiste en la sumatoria del bit dado en cada posición multiplicado por la potencia de 2 correspondiente a su posición.

En este contexto $w$ representa la cantidad de bits que posee el vector $\vec{x}$

Un ejemplo, en un contexto donde tenemos $w=8$ y poseemos el vector de bits $\vec{x}=[01000110]$ tenemos que:

$$
\begin{aligned}
BTU(\vec{x})&= 0*2^{7} +1*2^6+0*2^5+0*2^4+0*2^3+1*2^2+1*2^1+0*2^0 \\
BTU(\vec{x})&=70
\end{aligned}
$$

## Valor máximo

Debido a la definición anterior, podemos deducir que el valor máximo que se puede representar en unsigned es $2^{w}-1$ y hay un total de $2^w$ valores posibles por representar.

>[!tip]- UINT_MAX
> En la librería estándar de C, el valor máximo de un unsigned int se define mediante la constante **UINT_MAX**, que por ejemplo, en máquinas donde una variable de tipo *int* tiene definido un tamaño de **4 bytes**, significa que tenemos un espacio definido de **32 bits** para las variables de este tipo. En este caso el valor máximo será de $2^{w}-1$ y por lo tanto allí el valor máximo sería de $4294967295$.
> Lo mismo existe para otros tipos de datos numéricos como *long* o *short* y se encuentran en la librería `<limits.h>` 

## Valor mínimo

El valor mínimo representable en unsigned viene dado por el vector de bits $\vec{x}=[0000...]$, que, de la misma manera, su interpretación es 0 en sistema decimal.

# La aritmética modular y el overflow

Los límites de valor máximo y mínimo son fundamentales en el entendimiento de la representación de enteros. Puesto que, de esta manera, podemos entender qué pasa si en una variable que tiene definida $w$ bits el valor supera el límite establecido.

El hardware al tener $w$ bits asociados para almacenar la información de una variable, si una operación genera un resultado con una longitud mayor, descartará los bits nuevos que se generaron y eso se conoce como **overflow**.

En la interpretación del valor, vemos que el valor empieza a contar desde su valor mínimo hasta el valor máximo de forma cíclica y a esto es lo que se le conoce como **aritmética modular**.

El resultado de la operación siempre es módulo de $2^w$, lo cual es la causa estructural que explica el comportamiento que describimos previamente.

>[!bug]- Una suma que da un resultado inesperado
>Supongamos un escenario donde tenemos una variable de $w=8$ donde se almacenará un valor entero y se interpretará como *unsigned*. Sabemos que el valor máximo aquí será de $2^w-1$ por lo que en este caso concreto sería de `UMAX=255`. A esta variable le llamaremos `x=250`
>Si a esta variable le sumamos 6, desde el sistema decimal tenemos que `x=250+6` el resultado sería $256$.
>Sin embargo, cuando inspeccionamos la variable, vemos que el valor es `x=0`.
>**¿Qué sucedió?**
>Aquí vemos un caso claro de **overflow** y lo que realmente sucedió lo explica la **aritmética modular**.
>Si tomamos en cuenta que el resultado siempre será el módulo de $2^w$ que en este caso es $256$. Lo que sucede es que el resultado de $256 \bmod 256=0$ puesto que el resultado de 256 en su representación desde bits, ya no cabe en la memoria que esa variable tiene asignada, por lo que el hardware descartó el nuevo bit que era de 9 bits.






