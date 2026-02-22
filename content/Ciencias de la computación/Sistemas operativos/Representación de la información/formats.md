---
title: Formatos de representación
tags:
  - binario
  - sistemasoperativos
  - cienciascomputacion
---
# Bits

Las computadoras representan toda la información mediante el uso de los **bits** debido a su naturaleza física, donde el **0** representa la ausencia de electricidad y **1** la presencia.

Debido a este comportamiento físico, se pueden modelar operaciones matemáticas utilizando el **álgebra booleana**, donde George Bool planteó una estructura algebraica alrededor del conjunto finito:
$$
	Z = \{0,1\}
$$
Dónde es posible realizar operaciones que simulan el razonamiento lógico y que por consecuente, permiten procesar información que viene representada como bits.

Entendiendo esto, la información siempre se representa mediante vectores que pueden tener una longitud de $w$ bits de la siguiente manera:
$$
	x=(x_{w-1}, x_{w-2}\dots x_{0})
$$
Donde $x$ representa el vector de bits y cada $x_{w-i}$ representa un bit con valor entre $\{0,1\}$ 
Es así que un vector de bits se puede representar así:
$$
x=(0100100)
$$
# Bytes

Cada agrupación de 8 bits, representa lo que se conoce como un **byte**, de esta maner, cuando vemos un vector que tiene una cantidad de bits múltiplo de 8, podemos definir que tenemos $n/8$ bytes.

$$
x=(01001100\quad11001100\quad11110000)
$$
Podemos decir que el vector de bits $x$ posee **3 bytes** debido a que su longitud $w=24$ es múltiplo de 8.

Sin embargo, para simplificar la representación de los bytes, podemos utilizar la **representación hexadecimal**.

# Hexadecimal

El sistema hexadecimal se compone de una base numérica de **16** dígitos principales, donde contamos del 1 al 10 como en el sistema decimal, pero tambien contamos con 6 números más representados desde las letras A hasta la F que representarían los 6 números restantes para la base 16.

Esto implica que para realizar la conversión del sistema binario, al sistema hexadecimal, debemos contar con **mínimo 4 bits** para poder representar un sólo número, puesto que si tomamos el mínimo que viene siendo 0, tenemos que
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
Por lo tanto, esto resuelve el problema de representar de forma simplificada una cadena de bits, gracias a que con **un sólo número en hexadecimal** representas **4 dígitos en sistema binario**.

Ahora bien, si esto lo correlacionamos con los [[#Bytes |bytes]], podemos ver que para representar 1 byte, lo podemos realizar mediante 2 dígitos en hexadecimal y esto es particularmente útil para visualizar de forma más simplificada la información que físicamente el sistema está manejando.

$$
(1100\quad0110)_2=(C6)_{16}
$$
