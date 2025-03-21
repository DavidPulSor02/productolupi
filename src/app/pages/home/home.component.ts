import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent {
  @ViewChild('chatbotContainer') chatbotContainer!: ElementRef;
  @ViewChild('chatbotMessages') chatbotMessages!: ElementRef;
  @ViewChild('chatbotInput') chatbotInput!: ElementRef;

  toggleChat(): void {
    if (this.chatbotContainer) {
      const chatElement = this.chatbotContainer.nativeElement;
      chatElement.style.display = chatElement.style.display === "block" ? "none" : "block";
    }
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      this.sendMessage();
    }
  }

  sendMessage(): void {
    if (!this.chatbotInput || !this.chatbotMessages) return;

    const messageText = this.chatbotInput.nativeElement.value.trim();
    if (messageText === "") return;

    // Agregar mensaje del usuario
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = messageText;
    this.chatbotMessages.nativeElement.appendChild(userMessage);

    // Respuesta simulada del chatbot
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.textContent = this.getBotResponse(messageText);
    this.chatbotMessages.nativeElement.appendChild(botMessage);

    // Limpiar input y hacer scroll hacia abajo
    this.chatbotInput.nativeElement.value = "";
    this.chatbotMessages.nativeElement.scrollTop = this.chatbotMessages.nativeElement.scrollHeight;
  }

  getBotResponse(message: string): string {
    const responses: { [key: string]: string } = {
      "hola": "¡Hola! ¿Cómo puedo ayudarte?",
      "cotización": "Puedes cotizar tu auto en nuestra sección de cotizaciones.",
      "quiero comprar un auto": "Puedes explorar nuestro catálogo y cotizar tu auto en nuestra sección de cotizaciones.",
      "¿qué es SafeDrive?": "SafeDrive es una empresa especializada en la venta de autos con tecnología de punta para tu seguridad.",
      "¿dónde están ubicados?": "Nuestra dirección es 123 Calle Seguridad, CDMX.",
      "¿cuáles son sus horarios de atención?": "Estamos disponibles de lunes a viernes de 9:00 a 18:00 y sábados de 10:00 a 14:00.",
      "quiero vender mi auto": "Podemos comprarte tu auto al mejor precio del mercado. Cotiza con nosotros y recibe una oferta inmediata.",
      "¿ofrecen mantenimiento para autos?": "Sí, tenemos un equipo de profesionales listos para ayudarte con el mantenimiento de tu vehículo.",
      "¿los autos tienen garantía?": "Sí, ofrecemos garantía de hasta 4 años o 50,000 millas en nuestros vehículos.",
      "¿cómo puedo comunicarme con ustedes?": "Puedes llamarnos al +52 55 1234 5678 o enviarnos un correo a contacto@safedrive.com.",
      "gracias": "¡De nada! 😊",
    };


    return responses[message.toLowerCase()] || "Lo siento, no entiendo esa pregunta.";
  }
}
