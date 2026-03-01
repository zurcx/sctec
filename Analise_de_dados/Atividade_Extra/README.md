# Análise Exploratória de Dados do Titanic

Este projeto realiza uma análise exploratória de dados (AED) da base pública do Titanic.

## Objetivo

Compreender o comportamento geral dos dados, identificar padrões, relações entre variáveis e possíveis fatores associados à sobrevivência dos passageiros.

## Fonte dos Dados

Arquivo CSV obtido em: [Google Drive Titanic CSV](https://drive.google.com/file/d/11HptTxJbUMRG16xpC39fcliba_-Z_J9d/)

> ⚠️ Observação: você pode enviar o arquivo CSV junto com o projeto ou utilizar o link acima para acessá-lo diretamente do Google Drive.

## Ferramentas Utilizadas

- Python 3
- Pandas
- Numpy
- Matplotlib
- Seaborn
- Google Colab

## Conteúdo do Projeto

- `Extra_DATASCIENCE.ipynb` → Notebook do Colab com todo o código e gráficos
- `README.md` → Este arquivo com instruções
- `titanic_datasetLF.csv` → Arquivo CSV com os dados do Titanic (opcional, pode ser usado localmente ou pelo link)

## Passos Executados

1. Importação e visualização inicial dos dados.
2. Limpeza básica (tratamento de valores nulos).
3. Análise descritiva (estatísticas, distribuição de variáveis).
4. Análise visual com gráficos:
   - Distribuição de sobreviventes
   - Sobrevivência por sexo e classe
   - Distribuição de idade
   - Relação idade x sobrevivência
5. Análise de correlações entre variáveis.

## Como Rodar

### Se o CSV estiver junto com o projeto

1. Abrir o [Google Colab](https://colab.research.google.com/)
2. Fazer upload do notebook `Extra_DATASCIENCE.ipynb` e do arquivo `ttitanic_datasetLF.csv`
3. No notebook, garantir que o caminho do arquivo CSV seja:
file_path = 'titanic.csv'
