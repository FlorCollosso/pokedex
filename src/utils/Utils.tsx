export function waitFor(time: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

export function formatName(name: string): string {
    if (name.includes("♀")) {
      return name.replace("♀", "-f");
    } else if (name.includes("♂")) {
      return name.replace("♂", "-m");
    } else if (name.includes(". ")) {
      return name.replace(". ", "-");
    } else if (name.includes("farfetch'd")) {
      return name.replace("farfetch'd", "farfetchd");
    } else {
      return name;
    }
}

export function formatTitle(name: string): string {
if (name.includes("-f")) {
  return name.replace("-f", "♀")
}else if (name.includes("n-m")) {
  return name.replace("-m", "♂")
}else if (name.includes("r-")) {
  return name.replace("-", ". ")
}else if (name.includes("fetchd")) {
  return name.replace("fetchd", "fetch'd");
} 
return name;
}

export function formatText(flavor_text: any, name: string): string {
  
  const formattedText = flavor_text
    .replace(/\f/g, '\n')
    .replace(/\u00ad\n/g, '')
    .replace(/\u00ad/g, '')
    .replace(/ -\n/g, ' - ')
    .replace(/-\n/g, '-')
    .replace(/\n/g, ' ')
    .replace('POKéMON', 'pokemon')
    .replace(name.toUpperCase(), name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())

  return formattedText;
}