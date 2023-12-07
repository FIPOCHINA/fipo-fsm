import {mkdirSync, writeFileSync} from 'fs'
import * as factories from './factories'

const pathOfDocs = `${__dirname}/../docs`
mkdirSync(pathOfDocs, { recursive: true })

Object.values(factories).forEach((factory) => {
  let stateMachine = factory(null)

  writeFileSync(
      `${pathOfDocs}/${stateMachine.name}.mermaid`,
      stateMachine.visualize(),
      'utf-8',
  )
  writeFileSync(
      `${pathOfDocs}/${stateMachine.name}_display.mermaid`,
      stateMachine.visualize(true),
      'utf-8',
  )
})



