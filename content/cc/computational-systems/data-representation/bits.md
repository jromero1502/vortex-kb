---
title: "Bits: Unidad fundamental de representación de información"
tags:
  - binario
  - sistemasoperativos
  - cienciascomputacion
---
# Bits

La unidad fundamental con la que las computadoras representan la información se conoce como un **bit**, una entidad que puede portar uno de dos estados posibles representados mediante un 1 o un 0. Es una abstracción que es representada de forma física mediante los niveles de voltaje de los circuitos.

La naturaleza de los bits conecta directamente con el **álgebra booleana**, donde George Boole planteó una estructura algebraica alrededor de valores de verdad, junto a un conjunto de operaciones como (AND, OR, NOT) y con propiedades específicas como la asociatividad y la conmutatividad. Matemáticamente estos valores de verdad se representan con valores de 0 y 1, igual a los estados que puede representar un bit. Esta coincidencia estructural permite que un sistema diseñado con bits pueda ejecutar lógica booleana.

Entendiendo esto, la información puede venir representada mediante vectores que pueden tener una longitud de $w$ bits de la siguiente manera:
$$
	x=(x_{w-1}, x_{w-2}\dots x_{0})
$$
Donde $x$ representa el vector de bits y cada $x_{w-i}$ representa un bit con valor entre $\{0,1\}$ 
Es así que un vector de bits se puede representar así:
$$
x=(0100100)
$$
# Bytes

Cada agrupación de 8 bits, representa lo que se conoce como un **byte**, de esta manera, cuando vemos un vector que tiene una cantidad de bits múltiplo de 8, podemos definir que tenemos $w/8$ bytes.

$$
x=(01001100\quad11001100\quad11110000)
$$
Podemos decir que el vector de bits $x$ posee **3 bytes** debido a que su longitud $w=24$ es múltiplo de 8.

La decisión de que un byte sea una agrupación de 8 bits es una convención de diseño y no una necesidad matemática.

Sin embargo, para simplificar la representación de los bytes, podemos utilizar la **representación hexadecimal**.

# Hexadecimal

El sistema hexadecimal es de base 16, y como consecuencia requiere de **16** símbolos para representar cada valor posible. Contamos con los símbolos del 0 al 9 como en el sistema decimal, pero para terminar de representar los valores faltantes, recurrimos a las letras de la A hasta la F como símbolos complementarios.

## Notación numérica y conversión entre bases

Para comprender por qué la simplificación utilizando el sistema hexadecimal tiene sentido, debemos comprender que los sistemas hexadecimal, binario y decimal corresponden a una misma categoría y es que cada uno es un tipo de **notación numérica** que tiene distintos símbolos, pero representan los mismos valores, y eso permite su conversión.

Partamos de que en el sistema numérico, cada dígito tiene un peso que es dado por la potencia de la base correspondiente a su posición, la cual es determinada por un orden que va desde el dígito menos significativo (el que se encuentra a la derecha) hasta el dígito más significativo, el que se encuentra justo a la izquierda.

Tomemos un ejemplo:


$$
C6_{16}=(12*16^{1})+(6*16^{0})= 192 + 6=198_{10}
$$
Aquí vemos que el símbolo $C$ representa el valor $12$ en el sistema decimal y debido a que estamos en el sistema hexadecimal de base 16, lo multiplicamos por la potencia de su base correspondiente a la posición, que en este caso es la posición 1 al ser el valor más significativo en una expresión de dos símbolos y teniendo en cuenta que la posición siempre se cuenta desde **0**.

Esto implica que para realizar la conversión del sistema binario, al sistema hexadecimal, debemos contar con **mínimo 4 bits** para poder representar un solo número, puesto que si tomamos el mínimo que viene siendo 0, tenemos que
$$
(0000)_2 = (0)_{16}
$$
y el mayor número es
$$
(1111)_2=(F)_{16}
$$
Si miramos la tabla de equivalencia tenemos que:

$$  
\begin{array}{c|c|c}  
\text{Decimal} & \text{Binario (4 bits)} & \text{Hexadecimal} \\  
\hline  
0 & 0000 & 0 \\  
1 & 0001 & 1 \\  
2 & 0010 & 2 \\  
3 & 0011 & 3 \\  
4 & 0100 & 4 \\  
5 & 0101 & 5 \\  
6 & 0110 & 6 \\
7 & 0111 & 7 \\
8 & 1000 & 8 \\  
9 & 1001 & 9 \\  
10 & 1010 & A \\  
11 & 1011 & B \\  
12 & 1100 & C \\  
13 & 1101 & D \\  
14 & 1110 & E \\  
15 & 1111 & F \\  
\end{array}  
$$
Por lo tanto, esto resuelve el problema de representar de forma simplificada una cadena de bits, gracias a que con **un solo número en hexadecimal** representas **4 dígitos en sistema binario**.

Ahora bien, si esto lo correlacionamos con los [[#Bytes |bytes]], podemos ver que para representar 1 byte, lo podemos realizar mediante 2 dígitos en hexadecimal y esto es particularmente útil para visualizar de forma más simplificada la información que el sistema está manejando.

$$
(1100\quad0110)_2=(C6)_{16}
$$


