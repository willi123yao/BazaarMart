import React from 'react';

class Mining extends React.Component {
  render () {
    return (
      <li>
        <span className="uk-accordion-title" href="#">
          <span className="bz-section-title bz-color-mining">Mining</span>
        </span>
        <div className="uk-accordion-content">
          <table className="uk-table uk-table-divider bz-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Instant Sell Price</th>
                <th>Instant Buy Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bz-color-mining">Cobblestone</td>
                <td className="bz-item-price">{this.props.items["COBBLESTONE"] ? this.props.items["COBBLESTONE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["COBBLESTONE"] ? this.props.items["COBBLESTONE"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Cobblestone</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COBBLESTONE"] ? this.props.items["ENCHANTED_COBBLESTONE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COBBLESTONE"] ? this.props.items["ENCHANTED_COBBLESTONE"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Coal</td>
                <td className="bz-item-price">{this.props.items["COAL"] ? this.props.items["COAL"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["COAL"] ? this.props.items["COAL"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Coal</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COAL"] ? this.props.items["ENCHANTED_COAL"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COAL"] ? this.props.items["ENCHANTED_COAL"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Charcoal</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_CHARCOAL"] ? this.props.items["ENCHANTED_CHARCOAL"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_CHARCOAL"] ? this.props.items["ENCHANTED_CHARCOAL"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Coal Block</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COAL_BLOCK"] ? this.props.items["ENCHANTED_COAL_BLOCK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_COAL_BLOCK"] ? this.props.items["ENCHANTED_COAL_BLOCK"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Iron Ingot</td>
                <td className="bz-item-price">{this.props.items["IRON_INGOT"] ? this.props.items["IRON_INGOT"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["IRON_INGOT"] ? this.props.items["IRON_INGOT"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Iron</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_IRON"] ? this.props.items["ENCHANTED_IRON"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_IRON"] ? this.props.items["ENCHANTED_IRON"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Iron Block</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_IRON_BLOCK"] ? this.props.items["ENCHANTED_IRON_BLOCK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_IRON_BLOCK"] ? this.props.items["ENCHANTED_IRON_BLOCK"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Gold Ingot</td>
                <td className="bz-item-price">{this.props.items["GOLD_INGOT"] ? this.props.items["GOLD_INGOT"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["GOLD_INGOT"] ? this.props.items["GOLD_INGOT"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Gold</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_GOLD"] ? this.props.items["ENCHANTED_GOLD"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_GOLD"] ? this.props.items["ENCHANTED_GOLD"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Gold Block</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_GOLD_BLOCK"] ? this.props.items["ENCHANTED_GOLD_BLOCK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_GOLD_BLOCK"] ? this.props.items["ENCHANTED_GOLD_BLOCK"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Diamond</td>
                <td className="bz-item-price">{this.props.items["DIAMOND"] ? this.props.items["DIAMOND"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["DIAMOND"] ? this.props.items["DIAMOND"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Diamond</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_DIAMOND"] ? this.props.items["ENCHANTED_DIAMOND"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_DIAMOND"] ? this.props.items["ENCHANTED_DIAMOND"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Diamond Block</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_DIAMOND_BLOCK"] ? this.props.items["ENCHANTED_DIAMOND_BLOCK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_DIAMOND_BLOCK"] ? this.props.items["ENCHANTED_DIAMOND_BLOCK"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Lapis Lazuli</td>
                <td className="bz-item-price">{this.props.items["INK_SACK:4"] ? this.props.items["INK_SACK:4"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["INK_SACK:4"] ? this.props.items["INK_SACK:4"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Lapis Lazuli</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_LAPIS_LAZULI"] ? this.props.items["ENCHANTED_LAPIS_LAZULI"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_LAPIS_LAZULI"] ? this.props.items["ENCHANTED_LAPIS_LAZULI"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Lapis Block</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_LAPIS_LAZULI_BLOCK"] ? this.props.items["ENCHANTED_LAPIS_LAZULI_BLOCK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_LAPIS_LAZULI_BLOCK"] ? this.props.items["ENCHANTED_LAPIS_LAZULI_BLOCK"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Emerald</td>
                <td className="bz-item-price">{this.props.items["EMERALD"] ? this.props.items["EMERALD"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["EMERALD"] ? this.props.items["EMERALD"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Emerald</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_EMERALD"] ? this.props.items["ENCHANTED_EMERALD"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_EMERALD"] ? this.props.items["ENCHANTED_EMERALD"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Emerald Block</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_EMERALD_BLOCK"] ? this.props.items["ENCHANTED_EMERALD_BLOCK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_EMERALD_BLOCK"] ? this.props.items["ENCHANTED_EMERALD_BLOCK"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Redstone</td>
                <td className="bz-item-price">{this.props.items["REDSTONE"] ? this.props.items["REDSTONE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["REDSTONE"] ? this.props.items["REDSTONE"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Redstone</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_REDSTONE"] ? this.props.items["ENCHANTED_REDSTONE"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_REDSTONE"] ? this.props.items["ENCHANTED_REDSTONE"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Redstone Block</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_REDSTONE_BLOCK"] ? this.props.items["ENCHANTED_REDSTONE_BLOCK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_REDSTONE_BLOCK"] ? this.props.items["ENCHANTED_REDSTONE_BLOCK"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Nether Quartz</td>
                <td className="bz-item-price">{this.props.items["QUARTZ"] ? this.props.items["QUARTZ"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["QUARTZ"] ? this.props.items["QUARTZ"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Quartz</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_QUARTZ"] ? this.props.items["ENCHANTED_QUARTZ"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_QUARTZ"] ? this.props.items["ENCHANTED_QUARTZ"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Quartz Block</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_QUARTZ_BLOCK"] ? this.props.items["ENCHANTED_QUARTZ_BLOCK"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_QUARTZ_BLOCK"] ? this.props.items["ENCHANTED_QUARTZ_BLOCK"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Obsidian</td>
                <td className="bz-item-price">{this.props.items["OBSIDIAN"] ? this.props.items["OBSIDIAN"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["OBSIDIAN"] ? this.props.items["OBSIDIAN"].sellPrice : 'N/A'}</td>
              </tr>
              <tr>
                <td className="bz-color-mining">Enchanted Obsidian</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_OBSIDIAN"] ? this.props.items["ENCHANTED_OBSIDIAN"].buyPrice : 'N/A'}</td>
                <td className="bz-item-price">{this.props.items["ENCHANTED_OBSIDIAN"] ? this.props.items["ENCHANTED_OBSIDIAN"].sellPrice : 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    )
  }
}

export default Mining;