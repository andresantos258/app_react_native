import { Stack } from "expo-router";
import CadastroProduto from "./Componentes/Adaptadores/CadastroProduto";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Cadastro de produtos" />
      <Stack.Screen name="Adicionar"></Stack.Screen>
    </Stack>
  );
}