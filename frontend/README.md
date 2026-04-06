code
Markdown
# PhysioFlow - Auxílio na Rotina Externa

Aplicação web desenvolvida para fisioterapeutas gerenciarem atendimentos domiciliares e externos.

## 🛠️ Tecnologias e Arquitetura
- **Vue.js 3** (Composition API)
- **Tailwind CSS** (Custom Design System)
- **Arquitetura Hexagonal**: Separação clara entre Domínio, Casos de Uso e Adaptadores.
- **Lucide Icons**: Iconografia minimalista.
- **Persistência**: LocalStorage (Pronto para migração para API/Firebase).

## 🚀 Como rodar o projeto

1. **Instale as dependências:**
   ```bash
   npm install
Dependências utilizadas:
vue, vue-router, lucide-vue-next, tailwindcss, postcss, autoprefixer.
Inicie o servidor de desenvolvimento:
code
Bash
npm run dev
Build para produção:
code
Bash
npm run build
📂 Estrutura de Pastas
src/core: Contém a lógica de negócio pura. Se trocarmos o Vue pelo React, esta pasta permanece intacta.
src/adapters: Contém como a aplicação conversa com o mundo externo (UI e Banco de Dados/LocalStorage).
src/infrastructure: O "Glue Code" que une as interfaces às implementações reais via Injeção de Dependência.
🎨 Paleta de Cores Implementada
Primária: #078853 (Botões e Destaques)
Secundária: #89C6AD (Elementos de interface médios)
Fundo: #F0F7F4 (Leitura limpa e relaxante)
code
Code
---

### Considerações Finais de Implementação:

1.  **Mobile-First:** O layout utiliza `max-w-4xl` centralizado, mas foca em empilhamento vertical (stack) para facilitar o uso em smartphones durante o trajeto entre pacientes.
2.  **Persistência:** O arquivo `LocalStorageRepository.js` encapsula toda a lógica do navegador. Para mudar para um banco de dados real, basta criar um `ApiPatientRepository.js` implementando os mesmos métodos e alterar a injeção no arquivo `container.js`.
3.  **Fluxo de Atendimento:** O "Registro de Atendimento" foi desenhado como um modal intuitivo que permite ao profissional marcar os exercícios e salvar observações rapidamente antes de se deslocar para o próximo paciente.