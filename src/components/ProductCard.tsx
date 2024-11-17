"use client";

import { Card, Image, Text, Group, Button } from "@mantine/core";
import { useCheckout } from "react-culqi-next";
import tshirt from "assets/white.webp";
import { useState } from "react";
import classes from "./ProductCard.module.css"; // Importa el archivo CSS módulo

type Events = "closed" | "accepted" | "refused" | "noevent";

interface ProductCardProps {
  changeEvent: (events: Events, message: string) => void;
}

export function ProductCard({ changeEvent }: ProductCardProps) {
  const [amount] = useState(10000);
  const [title] = useState("White T-shirt");

  const { openCulqi } = useCheckout({
    settings: {
      title: title,
      currency: "PEN",
      amount: amount,
      options: {
        lang: "auto",
        installments: false,
        paymentMethods: {
          tarjeta: true,
          yape: true,
        },
        style: {
          logo: "",
          bannerColor: "",
          buttonBackground: "",
          buttonText: "",
          buttonTextColor: "",
          linksColor: "",
          menuColor: "",
          priceColor: "",
        },
      },
    },
    onClose: () => {
      changeEvent("closed", "Se cerró el checkout");
    },
    onToken: (token) => {
      changeEvent(
        "accepted",
        `Tarjeta aceptada, envía el token: ${token.id} a tu backend para terminar el pago.`
      );
    },
    onError: (error) => {
      console.log("handle the errors", error);
      changeEvent("refused", `Tarjeta rechazada, ${error.user_message}.`);
    },
  });

  return (
    <Card
      withBorder
      radius="md"
      className={`${classes.card} ${classes.cardDark}`}
    >
      <Card.Section
        className={classes.imageSection}
        style={{
          width: "300px",
          margin: "auto",
        }}
      >
        <Image src={tshirt.src} alt="White T-Shirt" />
      </Card.Section>

      <Group mt="md">
        <div>
          <Text fw={500}>Polo Blanco</Text>
        </div>
      </Group>

      <Card.Section className={`${classes.section} ${classes.sectionDark}`}>
        <Group gap={5}>
          <div>
            <Text className={classes.price}>s./100.00</Text>
          </div>
          <Button className={classes.button} onClick={openCulqi}>
            Pagar ahora
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
