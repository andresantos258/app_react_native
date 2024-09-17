import { Stack } from "expo-router";
import CadastroProduto from "./Componentes/Adaptadores/CadastroProduto";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="Cadastro"></Stack.Screen>
    </Stack>
  );
}