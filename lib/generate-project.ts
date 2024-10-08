#!/usr/bin/env ts-node

import { prompt } from 'inquirer'; 
import * as fs from 'fs';
import * as path from 'path';
import * as fse from 'fs-extra';

// Caminhos para os módulos e microsserviços
const MODULES_PATH = path.resolve(__dirname, 'src', 'modules');
const MICROSERVICES_PATH = path.resolve(__dirname, 'microsservices'); // Caminho base para microsserviços
const SRC_PATH = path.resolve(__dirname, 'src');

const questions = [
  {
    type: 'checkbox',
    name: 'modules',
    message: 'Selecione os módulos que deseja incluir no projeto:',
    choices: fs.readdirSync(MODULES_PATH),
  },
  {
    type: 'checkbox', // Alterado para checkbox
    name: 'microservices',
    message: 'Selecione os microsserviços que deseja incluir no projeto:',
    choices: fs.readdirSync(MICROSERVICES_PATH), // Lista as pastas disponíveis em microsservices
  },
];

prompt(questions).then((answers) => {
  const { modules, microservices } = answers;

  // Caminho para o novo projeto (onde os arquivos serão copiados)
  const projectPath = path.resolve(process.cwd());

  // Copiar os módulos selecionados da pasta 'src/modules'
  modules.forEach((module: string) => {
    const moduleSrcPath = path.join(MODULES_PATH, module);
    const moduleDestPath = path.join(projectPath, 'src', 'modules', module);

    fse.copySync(moduleSrcPath, moduleDestPath);
    console.log(`Módulo ${module} copiado para ${moduleDestPath}`);
  });

  // Copiar os microsserviços selecionados da pasta 'microsservices'
  microservices.forEach((microservice: string) => {
    const microserviceSrcPath = path.join(MICROSERVICES_PATH, microservice);
    const microserviceDestPath = path.join(projectPath, 'microsservices', microservice);

    // Verifica se o microsserviço correspondente existe antes de copiar
    if (fs.existsSync(microserviceSrcPath)) {
      fse.copySync(microserviceSrcPath, microserviceDestPath);
      console.log(`Microsserviço ${microservice} copiado para ${microserviceDestPath}`);
    } else {
      console.log(`Microsserviço ${microservice} não encontrado, pulando...`);
    }
  });

  // Copiar demais arquivos como app.module.ts, main.ts, etc.
  const filesToCopy = ['app.module.ts', 'main.ts', 'constants', 'shared', 'environment'];
  fse.copySync(path.resolve(__dirname, 'package.json'), path.join(projectPath, 'package.json'));
  filesToCopy.forEach(file => {
    const srcFilePath = path.join(SRC_PATH, file);
    const destFilePath = path.join(projectPath, 'src', file);

    fse.copySync(srcFilePath, destFilePath);
    console.log(`${file} copiado para ${destFilePath}`);
  });

  console.log('Projeto gerado com sucesso!');
});
