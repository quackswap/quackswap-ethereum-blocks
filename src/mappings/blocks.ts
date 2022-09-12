import {
    EthereumBlock
} from "@graphprotocol/graph-ts"

import {
    Block
} from "../../generated/schema"

export function handleBlock(block: EthereumBlock): void {
    let id = block.hash.toHex()
    let blockEntity = new Block(id);
    blockEntity.number = block.number;
    blockEntity.timestamp = block.timestamp;
    blockEntity.save();
  }
