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

Un ejemplo, en un contexto donde tenemos $w=8$ y poseemos el vector de bits $\vec{x}=[11000110]$ tenemos que:

$$
\begin{aligned}
BTU(\vec{x})&= 1*2^{7} +1*2^6+0*2^5+0*2^4+0*2^3+1*2^2+1*2^1+0*2^0 \\
BTU(\vec{x})&=198
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

Todas las operaciones matemáticas que realizan las computadoras, operan bajo la **aritmética modular**. Es decir, el resultado de la operación siempre es módulo de $2^w$, lo cual es la causa estructural que nos permite entender qué es lo que sucede cuando un resultado no cabe dentro de los bits de longitud $w$

Cuando una operación matemática que se almacena en una variable de $w$ bits fijos, es de longitud $w+1$  o más, el valor no cabe en la memoria por lo que el hardware descarta los nuevos dígitos, por lo tanto, el resultado se ve alterado y a esta condición se le conoce como **overflow**. Matemáticamente, el valor siempre se podrá interpretar como el $x \bmod 2^w$, donde $x$ es el resultado de nuestra operación.

>[!bug]- Una suma con un resultado inesperado
>Supongamos un escenario donde tenemos una variable de $w=8$ donde se almacenará un valor entero y se interpretará como *unsigned*. Sabemos que el valor máximo aquí será de $2^w-1$ por lo que en este caso concreto sería de `UMAX=255`. A esta variable le llamaremos `x=250`
>Si a esta variable le sumamos 6, desde el sistema decimal tenemos que `x=250+6` el resultado sería $256$.
>Sin embargo, cuando inspeccionamos la variable, vemos que el valor es `x=0`.
>**¿Qué sucedió?**
>Aquí vemos un caso claro de **overflow** y lo que realmente sucedió lo explica la **aritmética modular**.
>Si tomamos en cuenta que el resultado siempre será el módulo de $2^w$ que en este caso es $256$. Lo que sucede es que el resultado de $256 \bmod 256=0$ puesto que el resultado de 256 en su representación desde bits, ya no cabe en la memoria que esa variable tiene asignada, por lo que el hardware descartó el nuevo bit que era de 9 bits.

---
# Signed
Para la representación de números enteros con signo, se recurre a otras técnicas de interpretación. Históricamente se crearon varias tales como *one's complement*, *sign magnitude*, sin duda, el que se posicionó como el estándar absoluto, es la representación que se conoce como **two's complement**.

>[!question]- ¿Por qué es tan importante two's complement?
>Existe una razón muy clara de por qué *two's complement* se convirtió en el estándar absoluto en la representación de números enteros en las computadoras. Y es que con otras representaciones, era posible tener tanto un $-0$ como un $+0$, lo cuál en términos prácticos representaba distintos problemas al tener un signo asociado al número neutro del sistema decimal. Two's complement no posee este problema, ya que la forma en como está pensado solamente permite tener un $0$ 

## Two's complement
La fórmula que permite representar un número binario en two's complement es la siguiente:

$$
BT2(\vec{x})=\vec{x}_{w-1}2^{w-1}*(-1)+\sum_{i=0}^{w-2}\vec{x}_{i}2^i
$$
Se define la función $BT2(\vec{x})$ que se conoce como *Binary To Two's Complement*. Donde el *MSB* (*Most Significant Bit*), que es el bit que se encuentra en la primera posición de izquierda a derecha del vector de bits, tiene un peso aritmético de la potencia de 2 elevado a $w-1$ multiplicado por $-1$

Esto quiere decir que si el bit más significativo se encuentra definido con un 1, este tendrá un peso negativo que será restado a la sumatoria de los bits que se encuentren con valor de $1$ después de $w-2$ hasta el bit menos significativo. Este factor es el que permite representar números negativos.

>[!important]- La representación solo afecta la interpretación
>Algo muy importante a tener en cuenta respecto a estas representaciones, es que solamente alteran la interpretación del valor, más no la cadena de bits que se encuentra almacenada en el hardware.
>Para esto es importante comprender la diferencia entre cada capa de abstracción. El hardware opera con cadenas de bits y allí no existe *signed* o *unsigned*, solamente se encuentran los bits. Esa interpretación la da una capa de abstracción más arriba que utilizan los programas que interactúan con el hardware para darle un significado numérico a esa cadena de bits.

Ahora bien, tomemos un ejemplo con la misma cadena de bits que tomamos para *unsigned* así podemos ver como cambia la interpretación:

 En un contexto donde tenemos $w=8$ y poseemos el vector de bits $\vec{x}=[11000110]$ tenemos que:

$$
\begin{aligned}
BT2(\vec{x})&= (1)*(2^7)*(-1)+(1)*2^6+(0)*2^5+(0)*2^4+(0)*2^3+(1)*2^2+(1)*2^1+(0)*2^0 \\
BT2(\vec{x})&=-128 +70 \\
BT2(\vec{x})&=-58
\end{aligned}
$$
Como vemos acá, la interpretación cambia radicalmente, y eso tiene que ver con los rangos que maneja two's complement.

### Límites de two's complement y trade-off
Al tener un peso aritmético negativo en el bit más signitificativo, el rango de números positivos que se pueden representar se reduce drásticamente a favor de poder representar una gran cantidad de números negativos.

El **límite máximo** es representado por $TMAX=2^{w-1}-1$  y el **límite mínimo** viene siendo $TMIN=2^{w-1}*(-1)$ 

Esta relación matemática viene siendo la mitad del rango en números positivos, junto al $0$, y la otra mitad abarca los números negativos.

Aquí también aplica la **aritmética modular** de la misma manera que en la representación *unsigned*, como bien mencioné previamente, el hardware es agnóstico a estas representaciones. Sin embargo, el efecto de reinicio aquí se puede experimentar de una forma algo distinta, puesto que tan pronto se obtiene un valor de *TMAX*+1 o más, el número empezará desde $TMIN$.

Aquí el mecanismo a nivel de bits ocurre de la siguiente manera: cuando $TMAX$ se le suma $1$ hay un carry que termina que el resultado tenga el MSB como 1 y el resto como 0, lo cuál es equivalente a $TMIN$. 

El peso negativo del MSB altera el resultado matemático esperado, por lo que aquí se pueden presentar errores donde una operación matemática donde se espera cierto resultado, y ese mismo supera el límite de two's complement, veremos que obtendremos un número negativo y esta condición es un **overflow**.

>[!warning] Sin embargo, el estándar de C no garantiza este comportamiento
>A pesar de que en cuanto a la representación *unsigned* sí se garantiza que se aplica aritmética modular. El estándar de C clasifica el signed-overflow con *undefined-behaviour*, eso implica que en cada implementación se puede definir un comportamiento diferente y el estándar no garantiza un resultado predecible.
>Esto implica que el compilador tiene total libertad para decidir que realiza con tu código en esa situación. 

