interface sendMessageProps {
  name: string;
  email: string;
  message: string;
}
export const sendMessage = (message: sendMessageProps): void => {
  const filePath = "./public/data/teste.txt";
  const fileContent = "Conteúdo atualizado do arquivo";

  fs.writeFile(filePath, fileContent, (error: any) => {
    if (error) {
      console.error("Erro ao escrever o arquivo:", error);
    } else {
      console.log("Arquivo atualizado com sucesso!");
    }
  });
};
